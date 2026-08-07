---
urlSlug: podup-3-5-0
locale: es
title: "podup 3.5.0"
description: "La salida de ps, images y events ganó columnas nuevas y cambió de forma; --format json sigue siendo un superset compatible."
date: 2026-08-03
project: podup
banner: ../../assets/og/blog/podup-3-5-0.es.png
contributors: ["Jaro-c"]
---

Salió podup 3.5.0. Las tablas de `ps`, `images` y `events` cambiaron de forma — lee esto antes de que algo tuyo las parsee por posición de columna.

## Incompatible

- `ps` ganó **CREATED** entre IMAGE y STATUS, y STATUS ahora dice `Up 2h 5m (healthy)` en vez de la palabra suelta `running`.
- `images` ganó **SIZE** y **CREATED**.
- `events` ganó **TIME**. En 3.4.x no se imprimía ningún timestamp.

`--format json` es un superset en los tres casos. Las claves existentes mantienen su nombre y su significado; las nuevas llevan valores crudos de wire — un string RFC 3339, un entero Unix, un tamaño en bytes — en vez de texto ya renderizado. Si parseás el JSON, nada tuyo se rompe, y esa es la interfaz a la que conviene moverse.

Esto es un MINOR y no un MAJOR porque la API de la librería no cambió. La misma decisión se tomó para 3.4.0.

## Agregado

- `ps` ahora dice cuánto tiempo lleva arriba un contenedor, con su salud entre paréntesis cuando tiene healthcheck. El estado solo respondía "¿está encendido?"; el intervalo responde "¿acaba de reiniciar?", y la columna CREATED de al lado lo hace visible — creado hace nueve minutos, iniciado hace cuatro segundos.
- `images` ahora dice cuánto pesa cada imagen en disco, renderizado como lo hacen `podman images` y `docker compose images`. Lo medí contra ambos en vez de asumirlo: tres cifras significativas, unidades decimales.
- `events` ahora dice cuándo pasó cada evento. El feed traía el timestamp desde siempre y no lo imprimía, así que no había con qué correlacionarlo.

## Cambiado

- Un solo formateador para todo tamaño y duración, total sobre su tipo de entrada. `stats` se quedaba corto en TiB, así que un petabyte se imprimía `1024.0TiB` — la aritmética estaba bien y la unidad estaba mal. Su propia salida no cambia en lo demás.
- Las duraciones ahora se leen como hasta tres componentes según la magnitud: `5s`, `1h 5m 3s`, `1y 1mo 5d`. Un año son 365 días y un mes son 30, así que no dividen exacto, y la salida lo dice en vez de esconderlo.

## Arreglado

- `podup generate` y `podup autostart` imprimen su propio uso cuando falta un subcomando, en vez del uso de la raíz.
- Un valor que queda un byte corto de un límite de unidad ya no imprime la unidad que ya dejó atrás: 1048575 bytes se lee `1.0MiB`, no `1024.0KiB`.

## Limitación conocida

`events` imprime su columna TIME en UTC y no lo aclara, mientras que `podman events` imprime hora local con offset. Si estás correlacionando eventos de podup contra `podman events` o `journalctl`, tené en cuenta la diferencia. Seguimiento en #1309; el arreglo llega en una release posterior.

Changelog completo: [v3.4.1...v3.5.0](https://github.com/Glyndor/podup/compare/v3.4.1...v3.5.0).

Para instalar o actualizar: ver los métodos de instalación en la [página de podup](/proyectos/podup).

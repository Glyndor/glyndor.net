// Real numbers pulled from docs/benchmarks.md in each product's own repo --
// median over 10 measured iterations. Never invented, never rounded past
// what the source publishes. A product with no published benchmark suite
// simply has no entry here.
export interface BenchmarkSeries {
	name: string;
	values: number[];
}

export interface BenchmarkChart {
	unit: string;
	scale: "linear" | "log";
	categories: string[];
	series: [BenchmarkSeries, BenchmarkSeries, BenchmarkSeries];
}

export interface ProductBenchmarks {
	memory: BenchmarkChart;
	time: BenchmarkChart;
}

// Source: https://github.com/Glyndor/podup/blob/main/docs/benchmarks.md
// podup 3.4.1 vs. docker-compose 5.1.3 vs. podman-compose 1.5.0, all three
// against the same rootless Podman 5.7.0 instance.
const podupCategories = [
	"single · up",
	"scale · up",
	"network-ipam · up",
	"volume-heavy · up",
	"many-services · up",
	"wide-level · up",
	"build",
	"running-ops · ps",
];

export const benchmarks: Record<string, ProductBenchmarks> = {
	podup: {
		memory: {
			unit: "MiB",
			scale: "linear",
			categories: podupCategories,
			series: [
				{ name: "podup", values: [8.1, 8.1, 8.2, 8.2, 8.3, 8.6, 8.1, 7.8] },
				{
					name: "docker-compose",
					values: [29.8, 29.7, 30.0, 29.9, 31.0, 34.5, 30.5, 29.8],
				},
				{
					name: "podman-compose",
					values: [52.9, 52.6, 53.0, 52.8, 53.7, 53.9, 65.5, 50.4],
				},
			],
		},
		time: {
			unit: "ms",
			scale: "log",
			categories: podupCategories,
			series: [
				{ name: "podup", values: [99.5, 194.5, 114.9, 107, 390, 1130, 239.2, 8.7] },
				{
					name: "docker-compose",
					values: [125.6, 402.2, 150.7, 139, 511, 1571, 318.1, 24.8],
				},
				{
					name: "podman-compose",
					values: [477.5, 470.6, 716.5, 993, 2925, 9672, 377.9, 122.6],
				},
			],
		},
	},
};

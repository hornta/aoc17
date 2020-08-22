import { readFileSync } from "fs";

function parseInput(filepath) {
	const input = readFileSync(filepath, { encoding: "utf-8" });
	const rows = input.trim().split("\n");

	const table = [];
	for (const row of rows) {
		table.push(row.split("\t").map((x) => Number(x)));
	}

	return table;
}

function calculateChecksum(input) {
	let checksum = 0;

	for (const row of input) {
		const max = Math.max(...row);
		const min = Math.min(...row);
		const diff = max - min;
		checksum += diff;
	}

	return checksum;
}

function getSumOfDivisibleNumbers(row) {
	for (let x = 0; x < row.length; ++x) {
		for (let y = 0; y < row.length; ++y) {
			if (x === y) {
				continue;
			}

			const a = Math.max(row[x], row[y]);
			const b = Math.min(row[x], row[y]);
			const r = a / b;
			if (r % 1 === 0) {
				return r;
			}
		}
	}

	throw new Error("bad input");
}

function calculateChecksum2(input) {
	let checksum = 0;

	for (const row of input) {
		checksum += getSumOfDivisibleNumbers(row);
	}

	return checksum;
}

const input = parseInput("./input.txt");

const checksum = calculateChecksum(input);
console.log(checksum);

const checksum2 = calculateChecksum2(input);
console.log(checksum2);

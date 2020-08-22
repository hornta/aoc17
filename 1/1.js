import { readFileSync } from "fs";

function parseInput(filepath) {
	const input = readFileSync(filepath, { encoding: "utf-8" });
	return input.trim();
}

function calculateSum(input, getNextIndex) {
	let sum = 0;

	for (let i = 0; i < input.length; ++i) {
		const a = Number(input[i]);
		const b = Number(input[getNextIndex(input, i)]);

		if (a === b) {
			sum += a;
		}
	}

	return sum;
}

const input = parseInput("./input.txt");

function makeNextIndex(originalString, index) {
	if (index + 1 === originalString.length) {
		return 0;
	}
	return index + 1;
}

function makeHalfWayAroundIndex(originalString, index) {
	const half = originalString.length / 2;
	const nextIndex = index + half;
	if (nextIndex < originalString.length) {
		return nextIndex;
	}

	const left = half - (originalString.length - index);
	return left;
}

const sumNext = calculateSum(input, makeNextIndex);
console.log(sumNext);

const sumHalfAround = calculateSum(input, makeHalfWayAroundIndex);
console.log(sumHalfAround);

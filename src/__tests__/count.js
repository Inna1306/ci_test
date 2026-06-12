import healthStatus from '../count';

const dataList = [
  [{ name: 'Маг', health: 90 }, 'healthy'],
  [{ name: 'Маг', health: 40 }, 'wounded'],
  [{ name: 'Маг', health: 10 }, 'critical'],
];

test.each(dataList)('Testing healthStatus function with person %o', (person, expected) => {
  const result = healthStatus(person);
  expect(result).toBe(expected);
});

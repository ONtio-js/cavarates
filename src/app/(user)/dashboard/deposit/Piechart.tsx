'use client';
import { PieChart, Pie, Cell, Legend } from 'recharts';

const Piechart = ({
	investmentbalace,
	profit,
}: {
	investmentbalace: string;
	profit: string;
}) => {
	const data = [
		{ name: 'deposit', value: Number(investmentbalace), fill: 'green' },
		{ name: 'withdraw', value: Number(profit), fill: 'orange' },
	];

	return (
		<div>
			<PieChart
				width={250}
				height={250}
			>
				<Pie
					data={data}
					dataKey='value'
					nameKey='name'
					cx='50%'
					cy='50%'
					outerRadius={80}
					label={({ name, percent }) =>
						`${name}: ${(percent * 100).toFixed(0)}%`
					}
				>
					{data.map((entry, index) => (
						<Cell
							key={`cell-${index}`}
							fill={entry.fill}
						/>
					))}
				</Pie>
				<Legend />
			</PieChart>
		</div>
	);
};

export default Piechart;

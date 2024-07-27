import { db, Product } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	// TODO
	await db.insert(Product).values([
		{
			'id': 1,
			'name': 'Camiseta',
			'price': 12
		},
		{
			'id': 2,
			'name': 'Pantalón',
			'price': 20
		},
		{
			'id': 3,
			'name': 'Zapatillas',
			'price': 46
		},
		{
			'id': 4,
			'name': 'Camisa',
			'price': 25
		},
		{
			'id': 5,
			'name': 'Shorts',
			'price': 15
		},
		{
			'id': 6,
			'name': 'Zapato',
			'price': 120
		}
	])
}

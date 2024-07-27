import { defineDb, defineTable, column } from 'astro:db';

const Product = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
    price: column.number()
  }
})


export default defineDb({
  tables: {
    Product
  }
});

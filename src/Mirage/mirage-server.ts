import { Factory, Model, createServer } from "miragejs"
export default function configureServer() {
    createServer({
        models: {
            product: Model,
        },

        factories: {
            product: Factory.extend({
                id: (i) => i,
                productratings: () => Math.random() * 5, // Generate random ratings between 0 and 5
                productimage: 'example.jpg',
                productname: (i) => `Example Product ${i + 1}`,
                producspecs: 'Example specifications',
                productprice: 19.99,
            }),
        },

        seeds(server) {
            server.createList('product', 100); // Create 10 product records using the product factory
        },
        routes() {
            this.namespace = "api"

            this.get("/products")
        },
    })
}

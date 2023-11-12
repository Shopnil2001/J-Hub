

const Blog = () => {
    return (
        <div className='w-3/5 mx-auto border border-slate-950 p-28'>
            <div>
                <h1 className='text-2xl font-bold mb-4'>TOKEN:</h1>
                <p className='text-xl font-semibold mb-7'> An access token is a unique string of characters that is issued by an authorization server after a user authenticates and grants permission to access a resource. It represents the user's authorization to access specific resources or perform certain actions on a server. Access tokens are typically short-lived and have an expiration time.

                    A refresh token, on the other hand, is a long-lived token that is used to obtain a new access token when the current one expires. It is typically issued along with the access token and is stored securely on the client-side, such as in a cookie or local storage.

                    When a client makes a request to a server, it includes the access token in the request headers or as a parameter, allowing the server to authenticate and authorize the user's access to protected resources. If the access token expires, the client can use the refresh token to obtain a new access token without requiring the user to reauthenticate.

                    It is crucial to store these tokens securely on the client-side to prevent unauthorized access. Best practices suggest storing them in secure and HTTP-only cookies or using browser storage mechanisms with proper security measures in place</p>
            </div>

            <div>

                <h1 className='text-2xl font-bold mb-4'>Express Js:</h1>
                <p className='text-xl font-semibold mb-7'>Express.js is a popular and lightweight web application framework for Node.js. It provides a simple and flexible interface that allows developers to build web applications and APIs quickly. Express.js follows the middleware pattern, enabling the creation of modular and extensible applications. It offers features like routing, request and response handling, session management, and template engine support. With a vast ecosystem of middleware and extensions, Express.js gives developers the freedom to customize and scale their applications according to their needs.</p>
            </div>
            <div>

                <h1  className='text-2xl font-bold mb-4'>NEST Js:</h1>
                <p className='text-xl font-semibold mb-7'>NestJS is a progressive and opinionated framework for building efficient, scalable, and maintainable server-side applications using JavaScript(TypeScript) and Node.js. It combines the concepts of object-oriented programming, functional programming, and modular architecture to provide a robust foundation for creating enterprise-grade applications. NestJS utilizes Express.js under the hood but adds additional features and functionality to streamline the development process. It offers features like dependency injection, decorators for building modular components, powerful CLI for scaffolding, built-in support for TypeScript, and integration with various tools and libraries commonly used in the Node.js ecosystem. NestJS is known for its adherence to best practices and its ability to create highly testable and scalable applications.</p>
            </div>
            <div>

                <h1  className='text-2xl font-bold mb-4'>MY code:</h1>
                <p className='text-xl font-semibold mb-7'> I used js, react js and many react packages t make a job portal web site. For data base I used Mongodb and for Backend I used node.js .I secured my api with JWT .</p>
            </div>
        </div>
    );
};

export default Blog;
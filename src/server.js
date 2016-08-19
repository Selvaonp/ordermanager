import { Server } from 'hapi';
import loadPlugins from './lib/loadPlugins';
import routes from './lib/routes';
import db from './lib/db'
const server = new Server();
server.connection({ port: 9000 });



/**
 * Sets up a sample route.
 * TODO Replace this with your own code / modules
 */
function code() {
  server.route({
    method: 'GET',
    path: '/foobar',
    handler(request, reply) {
      reply({ foo: 'test' });
    }
  });
}

function startServer() {
  server.start(() => {
    server.route(routes());
    server.log(
      ['ordermanager', 'info'],
      `Server running at: ${server.info.uri}`
    );
  });
}

function logErrors(err) {
  server.log(['ordermanager', 'error'], err);
}

// Loading Production plugins.
// devMode plugins are conditionally loaded.
loadPlugins(server, process.env.NODE_ENV === 'development')
  .then(code)
  .then(startServer)
  .catch(logErrors);

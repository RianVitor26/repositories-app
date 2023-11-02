import Dexie from 'dexie';
const db = new Dexie('Repositories');
db.version(1).stores({
  repositories: '++id,title,description,languages,color',
});

export default db;

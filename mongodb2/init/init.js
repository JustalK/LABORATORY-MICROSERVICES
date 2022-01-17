db.createUser({
  user: 'admin',
  pwd: 'test',
  roles: [
    {
      role: 'readWrite',
      db: 'admin',
    },
  ],
});
db.createCollection('test');

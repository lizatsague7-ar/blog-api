const db = require('../database');

const Article = {
  create: (article, callback) => {
    const { title, content, author, date, category, tags } = article;
    db.run(
      'INSERT INTO articles (title, content, author, date, category, tags) VALUES (?, ?, ?, ?, ?, ?)',
      [title, content, author, date, category, tags],
      function(err) {
        callback(err, { id: this.lastID });
      }
    );
  },

  findAll: (callback) => {
    db.all('SELECT * FROM articles', [], callback);
  },

  findById: (id, callback) => {
    db.get('SELECT * FROM articles WHERE id = ?', [id], callback);
  },

  update: (id, updates, callback) => {
    const { title, content, category, tags } = updates;
    db.run(
      'UPDATE articles SET title = ?, content = ?, category = ?, tags = ? WHERE id = ?',
      [title, content, category, tags, id],
      callback
    );
  },

  delete: (id, callback) => {
    db.run('DELETE FROM articles WHERE id = ?', [id], callback);
  },

  search: (query, callback) => {
    const searchTerm = `%${query}%`;
    db.all(
      'SELECT * FROM articles WHERE title LIKE ? OR content LIKE ?',
      [searchTerm, searchTerm],
      callback
    );
  }
};

module.exports = Article;
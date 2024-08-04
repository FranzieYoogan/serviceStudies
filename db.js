const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient, ObjectId } = require('mongodb');
const cors = require('cors');
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

const url = 'mongodb+srv://franzieyoogan2:admin357159@cluster0.guw8a4s.mongodb.net/';
const dbName = 'test1';

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to MongoDB');
    const db = client.db(dbName);

    // Define routes
    app.post('/test1', async (req, res) => {
      console.log('Request Body:', req.body);
      const test1Collection = db.collection('test1');
      try {
        const result = await test1Collection.insertOne(req.body);
        console.log('Insert Result:', result);
        res.status(201).json(result.ops[0]);
      } catch (error) {
        console.error('Error inserting item:', error);
        res.status(400).json({ message: error.message });
      }
    });

    // Get all users
    app.get('/test1', async (req, res) => {
      const usersCollection = db.collection('test1');
      try {
        const users = await usersCollection.find().toArray();
        res.status(200).json(users);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    });

    // Get a user by ID
    app.get('/test1/:id', async (req, res) => {
      const usersCollection = db.collection('test1');
      try {
        const user = await usersCollection.findOne({ _id: new ObjectId(req.params.id) });
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.status(200).json(user);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    });

    app.put('/test1/:id', async (req, res) => {
      const test1Collection = db.collection('test1');
      try {
        const result = await test1Collection.findOneAndUpdate(
          { _id: new ObjectId(req.params.id) },
          { $set: req.body },
          { returnOriginal: false }
        );
        if (!result.value) return res.status(404).json({ message: 'test1 not found' });
        res.status(200).json(result.value);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
    });

    // Delete a user
    app.delete('/test1/:id', async (req, res) => {
      const usersCollection = db.collection('test1');
      try {
        const result = await usersCollection.deleteOne({ _id: new ObjectId(req.params.id) });
        if (result.deletedCount === 0) return res.status(404).json({ message: 'User not found' });
        res.status(200).json({ message: 'User deleted' });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    });

  

 

    // Start the server
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}/`);
    });
  })
  .catch(error => console.error(error));
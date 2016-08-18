
import express from 'express';
import { Question, Answer } from '../db/models';

const router = express.Router(); // eslint-disable-line new-cap

// questions
router.route('/questions')

  // get all questions
  .get((req, res) => {
    Question.findAll().then((questions) => {
      res.json(questions);
    }, (error) => {
      res.send(error);
    });
  })

  // create a new question
  .post((req, res) => {
    Question.create({
      title: req.body.title,
      text: req.body.body,
    }).then(() => {
      res.send('Question added.');
    }, (error) => {
      const errors = [];
      error.errors.forEach((err) => {
        errors.push(err.message);
      });
      res.send(errors);
    });
  });

// specific question
router.route('/questions/:qID')

  // GET specific question
  .get((req, res) => {
    Question.findOne({
      where: {
        id: req.params.qID,
      },
      include: [Answer],
      order: [
        [Answer, 'vote', 'DESC'],
        [Answer, 'updatedAt', 'DESC'],
      ],
    }).then((question) => {
      res.send(question);
    }, () => {
      res.send('There was a problem retrieving that question.');
    });
  })

  // UPDATE a question
  .put((req, res) => {
    Question.update({
      title: req.body.title,
      text: req.body.text,
    }, {
      where: {
        id: req.params.qID,
      },
    }).then(() => {
      res.send('Question updated.');
    }, (error) => {
      res.send(error);
    });
  })

  // DELETE a question
  .delete((req, res) => {
    Question.destroy({
      where: {
        id: req.params.qID,
      },
    }).then(() => {
      res.send('Question deleted.');
    });
  });

// answers
router.route('/questions/:qID/answers')

  // post answer to a question
  .post((req, res) => {
    Answer.create({
      text: req.body.text,
      QuestionId: req.params.qID,
    }).then(() => {
      res.send('Answer added.');
    }, (error) => {
      const errors = [];
      error.errors.forEach((err) => {
        errors.push(err.message);
      });
      res.send(errors);
    });
  });

router.route('/questions/:qID/answers/:aID')

  // update an answer
  .put((req, res) => {
    Answer.update({
      text: req.body.text,
    }, {
      where: {
        id: req.params.aID,
      },
    }).then(() => {
      res.send('Answer updated.');
    }, (error) => {
      res.send(error);
    });
  })

  // delete an answer
  .delete((req, res) => {
    Answer.destroy({
      where: {
        id: req.params.aID,
      },
    }).then(() => {
      res.send('Answer deleted.');
    });
  });

// vote routes
router.route('/questions/:qID/answers/:aID/vote-:dir')
  .post((req, res) => {
    Answer.findById(req.params.aID)
    .then((answer) => {
      if (req.params.dir === 'up') {
        answer.increment('vote');
        res.send('Up voted!!');
      } else {
        answer.decrement('vote');
        res.send('Down voted!!');
      }
    });
  });

export default router;

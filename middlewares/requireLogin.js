module.exports = (req, res, next) => {
  //Check to see if the user is logged in, if not stop, send 401 to the browser, and send the error to the console for developers' ref.
      if(!req.user){
        return res.status(401).send({ error: 'You must log in!'});
      }
  next();
};

//not found middleware
const notFound = (req, res, next) => {
    //create the error
    const error = new Error(`Not found - ${req.originalUrl}`);
    //set the status code
    res.status(404);
    //forward to the error handler
    next(error);
}
//error handler
const errorHandler = (error, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({
        message: error.message,
        stack: process.env.NODE_ENV === 'production' ? '🥞' : error.stack,
    });
}

module.exports = {
    notFound,
    errorHandler
};
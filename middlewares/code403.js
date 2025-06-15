module.exports = function code403(req, res, next) {
    const key = req.headers['key']
        if (key !== process.env.KEYACCES) {
            return res.status(403).json({ 
                message: 'Acesso negado',
                code: 403,
            })
        }
    next()
}
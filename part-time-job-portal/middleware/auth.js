module.exports=(req,res,next)=>{if(req.session?.admin)return next();if(req.originalUrl.startsWith('/api/'))return res.status(401).json({error:'Unauthorized'});return res.redirect('/admin/login');};

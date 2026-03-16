const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { errorHandler } = require('./middlewares/errorHandler');
const BuddyRoutes = require('./routes/Buddy_routes');
const CategoryRoutes = require('./routes/Category_routes');
const adminBuddyRoutes = require('./routes/adminBuddy_routes');
const adminCategoryRoutes = require('./routes/adminCategory_routes');
const path = require('path');
const app = express();


// Cấu hình View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Cấu hình thư mục chứa tệp tĩnh (CSS, JS, Images)
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());
app.use(cors());
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));
// Middleware xử lý dữ liệu từ Form (URL Encoded)
app.use(express.urlencoded({ extended: true }));

// Admin Routes
app.use('/admin/buddy', adminBuddyRoutes);
app.use('/admin/category', adminCategoryRoutes);

app.use(errorHandler);

module.exports = app;
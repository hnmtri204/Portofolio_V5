const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', // Chọn chế độ 'development' hoặc 'production'
  entry: './src/main.jsx', // Điểm vào của ứng dụng
  output: {
    path: path.resolve(__dirname, 'dist'), // Thư mục đầu ra
    filename: 'bundle.js', // Tên tệp đầu ra
    clean: true, // Dọn dẹp thư mục đầu ra trước khi tạo
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Biên dịch tệp .js và .jsx
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Các loại tệp có thể được xử lý
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Tệp HTML mẫu
    }),
  ],
  devServer: {
    static: './dist', // Thư mục phục vụ
    hot: true, // Bật tính năng hot reloading
  },
};

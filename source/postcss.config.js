isProduction =  ( process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging' )

module.exports = {
  plugins: isProduction ? [
    require('autoprefixer')
  ] : []
}

export default checkIsDevBuild;

function checkIsDevBuild() {
  return process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'localhost';
}

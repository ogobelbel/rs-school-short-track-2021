/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const result = email.match(/([^.])@[a-z0-9-]+.[a-z]+/);
  return (result[0].slice(2));
}

module.exports = getEmailDomain;

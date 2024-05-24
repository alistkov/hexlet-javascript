const getDomainInfo = (domain) => {
  const scheme = domain.startsWith('https') ? 'https' : 'http';
  return {
    scheme,
    name: domain.replace(`${scheme}://`, ''),
  };
};

export default getDomainInfo;

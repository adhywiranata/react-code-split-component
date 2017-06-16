export default new Promise((resolve, reject) => {
  setTimeout(() => {
    if (typeof <DummyComponent /> === 'object') {
      resolve(<DummyComponent />);
    } else {
      reject();
    }
  }, 1);
});

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen fixed top-0 left-0 z-50 w-full bg-white/95">
      <div className="lds-ripple">
        <div />
        <div />
      </div>
    </div>
  );
};

export default Loader;

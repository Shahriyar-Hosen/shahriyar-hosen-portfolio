import DetailsNav from "./DetailsNav";

const ProjectDetails = () => {
  return (
    <section>
      <DetailsNav />
      <div className="pt-24 max-w-7xl mx-auto">
        {/* Project Details */}
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://api.lorem.space/image/album?w=400&h=400"
              alt="Album"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">New album is released!</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Listen</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;

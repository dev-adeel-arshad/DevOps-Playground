export default function Home() {
  return (
    <section className="home-hero page-block">
      <p className="eyebrow">CI/CD learning lab</p>
      <h1>Learning DevOps by building projects and deploying them on AWS</h1>
      <p className="home-copy">
        This project demonstrates how to build a full-stack app, containerize it with Docker,
        automate deployment with GitHub Actions, and continuously ship updates to EC2.
      </p>

      <div className="home-tags">
        <span>Docker</span>
        <span>GitHub Actions</span>
        <span>EC2</span>
        <span>Continuous Deployment</span>
      </div>
    </section>
  );
}
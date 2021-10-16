import "./ResultsCardComponent.css";

const ResultsCardComponent = () => {
  return (
    <section className="results-card">
      <div className="card mt-3 border-2" style={{width: 18 + "rem"}}>
        <div className="card-body">
          <h2 className="card-title">Results</h2>
          <ol>
            <li><span className="fw-bold">Outlook: </span><span>Sunny</span></li>
            <li><span className="fw-bold">Temperature: </span><span>High</span></li>
            <li><span className="fw-bold">Humidity: </span><span>Low</span></li>
            <li><span className="fw-bold">Wind Strength: </span><span>Weak</span></li>
          </ol>
        </div>
      </div>
    </section>
  )
}

export default ResultsCardComponent

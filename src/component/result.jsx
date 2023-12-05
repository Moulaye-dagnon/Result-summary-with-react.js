import './result.css'
export function Result(){
	return <div className="result-section">
		<p className='result'>Your Result</p>
		<span className='show-result'>76 <span>of 100</span></span>
		<div className='desc'>
		<h3>Great</h3>
		<p>You scored highter than 65% of the people who have taken these tests  </p>
		</div>

	</div>
}
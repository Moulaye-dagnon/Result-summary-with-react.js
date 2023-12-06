import './items.css'
export function Item({ element}){
	const styles = {color:`${element.color}`,backgroundColor:`${element.BackgoundColor}`}

	return <div className="Item" style={styles} >
		<div>
			<img src={require(`${element.icon}`)} alt="" />
			<span>{element.category}</span>

		</div>
		<p>{element.score}/100</p>

	</div>
}
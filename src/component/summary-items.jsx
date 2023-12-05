import './items.css'
import image from '../assets/images/icon-reaction.svg'
export function Item({color, element}){
	const styles = {color:`${element.color}`,backgroundColor:`${element.BackgoundColor}`}

	return <div className="Item" style={styles} >
		<div>
			<img src={image} alt="" />
			<span>{element.category}</span>

		</div>
		<p>{element.score}/100</p>

	</div>
}
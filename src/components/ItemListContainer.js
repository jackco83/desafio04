const itemListcontainer = (props) => {
  return (
    <h2 className="title">Bienvenido, {props.user.name + " " + props.user.lastname}</h2>
  )
}

export default itemListcontainer
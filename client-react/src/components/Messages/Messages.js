  import './Messages.css'
  
  export const Messages = (props) => {


    return(<div className="container-messages">
    <button className="del-btn">Delete</button>
    <table>
      <tbody>
        <tr className="main-tr">
          <th className="name">Full name</th>
          <th className="email">email</th>
          <th className="message">Message</th>
          <th className="delete">Delete</th>
        </tr>
        <tr>
          <td className="tdname" >MAria</td>
          <td className="tdemail" >Lem</td>
          <td className="tdmes" >Lorem ipsum</td>
        </tr>
      </tbody>
    </table>
  </div>
  )
  }
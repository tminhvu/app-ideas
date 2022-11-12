import PropTypes from 'prop-types'

const Page = (props) => {
    return (
     <div className="grid place-content-center p-20 mt-14 bg-white">
            {props.children}
     </div>
    )
}

Page.propTypes = {
    children: PropTypes.object
}

export default Page

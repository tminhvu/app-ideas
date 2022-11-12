import PropTypes from 'prop-types'

const Block = (props) => {
    return (
        <div className='bg-white h-14'>
            <div className='text-center h-full grid content-center'>
                {props.children}
            </div>
        </div>
    )
}

Block.propTypes = {
    children: PropTypes.object
}

export default Block

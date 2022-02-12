import { useNavigate } from 'react-router-dom'

export function GoBackBtn() {
    const navigate = useNavigate()

    function goBack() {
        navigate(-1)
    }

    return (
        <button className='btn btn-goback' onClick={goBack}>
            Go Back
        </button>
    )
}

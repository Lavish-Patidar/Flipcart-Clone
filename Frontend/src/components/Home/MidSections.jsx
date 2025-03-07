import { Grid, styled } from '@mui/material'
import { imageURL } from '../../constant/data'


const MIdWrapper = styled(Grid)`
margin-top:10px;
justify-content: space-between;
`

const MidItems = styled(Grid)`
padding: 0px 5px;
`

const MidSections = () => {
    return (

        <MIdWrapper lg={12} sm={12} md={12} xs={12} container >
            {
                imageURL.map(image => (
                    <MidItems key={image} item lg={4} md={4} sm={12} xs={12}>
                        <img src={image} alt='img' style={{ width: '100%' }} />
                    </MidItems>
                ))
            }
        </MIdWrapper>

    )
}

export default MidSections
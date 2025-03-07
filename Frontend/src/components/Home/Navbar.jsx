import { Box } from '@mui/material'
import { navData } from '../../constant/data'
import { NavBox, NavItemBox, NavItemText } from './ComHome'

const Navbar = () => {
    return (
        <>
            <Box style={{ background: '#fff' }}>
                <NavBox>
                    {
                        navData.map(data => (
                            <NavItemBox key={data.id}>
                                <img src={data.url} alt='nav' style={{ width: 65 }} />
                                <NavItemText>{data.text}</NavItemText>
                            </NavItemBox>
                        ))
                    }
                </NavBox>
            </Box>
        </>
    )
}

export default Navbar
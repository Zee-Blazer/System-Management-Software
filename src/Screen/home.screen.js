
// Components
import { MainTitle } from "../Components/Header/main-title.component"
import { TableComponent } from "../Components/Table/table.component"
import { HeaderComponent } from '../Components/Header/header.component'

export const HomeScreen = () => {

    return (
        <div>
            <HeaderComponent />
            <MainTitle />

            <TableComponent />
        </div>
    )
}

import { withStyles } from '@material-ui/styles'
import { Chip } from '@material-ui/core'

const StyledChip = withStyles({
  root: {
    marginTop: 100,
    marginBottom: 4,
    marginRight: 4
  }
})(Chip)
export default StyledChip

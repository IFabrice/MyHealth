import { createStyles, rem, Select, TextInput } from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import SubmitButton from '../components/submitButton'

const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
  },

  input: {
    height: rem(54),
    paddingTop: rem(18),
  },

  label: {
    position: 'absolute',
    pointerEvents: 'none',
    fontSize: theme.fontSizes.xs,
    paddingLeft: theme.spacing.sm,
    paddingTop: `calc(${theme.spacing.sm} / 2)`,
    zIndex: 1,
  },
}));

function ContainedInputs() {
  // You can add these classes as classNames to any Mantine input, it will work the same
  const { classes } = useStyles();

  return (
    <div style={{display: 'center', alignItems: 'center'}}>
      <TextInput label="Patient Name" placeholder="Patient 0" classNames={classes} />

      <Select
        mt="md"
        withinPortal
        data={['A', 'B', 'C', 'D']}
        placeholder="Pick one"
        label="Result Type"
        classNames={classes}
      />

      <DatePickerInput
        mt="md"
        popoverProps={{ withinPortal: true }}
        label="Test Date"
        placeholder="MM/DD/YYYY"
        classNames={classes}
        clearable={false}
      />
    <footer style={{ display: 'flow', alignItems: 'center', marginTop: 'px' }}>
        <SubmitButton style={{ margin: 'auto' }} />
    </footer>
    </div>
  );
}

export default ContainedInputs
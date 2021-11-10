import styled from 'styled-components'

interface Props {
  note: number
}

export default styled.span<Props>`
  background: ${(props) => (props.note >= 6.0 ? 'var(--green-2)' : 'red')};
`
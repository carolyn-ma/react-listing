const footerStyles = {
  textAlign: 'center',
  margin: '0.5rem 0rem',
  borderTop: '1px solid lightgray',
  position: 'sticky',
  bottom: '0',
  background: '#F4F4F4'
}

export const Footer = () => {
  return (
    <footer style={ footerStyles }>
      <p>
        Copyright &copy; 2021 [
        <a
          href="https://www.sideinc.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          About
        </a>
        ]
      </p>
    </footer>
  );
};

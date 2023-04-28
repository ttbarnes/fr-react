import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const PageContainer = ({ children }) => (
  <motion.div
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    initial={{ opacity: 0 }}
    transition={{ duration: 1 }}
  >
  { children }
  </motion.div>
);

PageContainer.propTypes = {
  children: PropTypes.node.isRequired
};

export default PageContainer;

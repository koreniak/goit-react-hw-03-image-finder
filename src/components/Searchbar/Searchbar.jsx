import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { SearchbarHeader, SearchForm, SearchFormButton, SearchFormButtonLabel, SearchFormInput } from './Searchbar.styled';
import { SlMagnifier } from 'react-icons/sl';

const Searchbar = ({onSubmit}) => {
  const handleSubmit = async (values, actions) => {
    await onSubmit(values);
    actions.setSubmitting(false);
    actions.resetForm();
  };

  return <Formik
          initialValues={{value: ""}}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) =>
                <SearchbarHeader>
                  <SearchForm>
                    <SearchFormButton type="submit" disabled={isSubmitting}>
                      <SlMagnifier/>
                    </SearchFormButton>

                    <SearchFormInput
                      type="text"
                      name="value"
                      autoComplete="off"
                      autoFocus
                      placeholder="Search images and photos"
                    />
                  </SearchForm>
                </SearchbarHeader>}
        </Formik>
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default Searchbar;
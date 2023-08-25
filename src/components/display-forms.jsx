import { CollapsedForm } from "./collapsed-form";
import PropTypes from 'prop-types'

export function DisplayForms({
  forms,
  onChange,
  onCancel,
  toggleCollapsed,
  onHide,
  onRemove,
  FormComponent,
  titleKey,
  arrayName,
}) {
  return (
    <div className="forms-container">
      {forms.map((form) =>
        form.isCollapsed ? (
          <CollapsedForm
            onClick={toggleCollapsed}
            key={form.id}
            form={form}
            title={form[titleKey]}
            arrayName={arrayName}
            hideForm={onHide}
          />
        ) : (
          <FormComponent
            onChange={onChange}
            form={form}
            key={form.id}
            cancel={onCancel}
            save={toggleCollapsed}
            remove={onRemove}
          />
        )
      )}
    </div>
  );
}

DisplayForms.propTypes = {
  forms: PropTypes.array,
  onChange: PropTypes.func,
  onCancel: PropTypes.func,
  toggleCollapsed: PropTypes.func,
  onHide: PropTypes.func,
  onRemove: PropTypes.func,
  FormComponent: PropTypes.func,
  titleKey: PropTypes.string,
  arrayName: PropTypes.string
}
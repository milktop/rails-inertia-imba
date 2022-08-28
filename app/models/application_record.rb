class ApplicationRecord < ActiveRecord::Base
  primary_abstract_class

  def with_audits
    as_json(include: :audits)
  end
  
end

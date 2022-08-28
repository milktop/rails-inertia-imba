class Product < ApplicationRecord
  include Filterable
  include SearchCop

  audited
  
  validates :name, presence: true
  validates :price, presence: true, numericality: { integer: true }
  validates :narcotic, inclusion: { in: [true, false] }
  validates :antibiotic, inclusion: { in: [true, false] }
  
  search_scope :search do
    attributes :name
  end

  scope :filter_by_min_price, -> price { where('price >= ?', price ? price.to_i * 100 : 0) }
  scope :filter_by_max_price, -> price { where('price <= ?', price ? price.to_i * 100 : Float::INFINITY) }
  scope :filter_by_narcotic, -> boolean { where(narcotic: boolean) if boolean.present?  }
  scope :filter_by_antibiotic, -> boolean { where(antibiotic: boolean) if boolean.present?  }

end

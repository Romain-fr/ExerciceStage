class TableNumbers < ActiveRecord::Migration[6.0]
  def change
    create_table :numbers
    add_column :numbers, :value, :float
  end
end

class AddLikesToSongs < ActiveRecord::Migration[5.2]
  def change
    add_column :songs, :likes, :integer, default: 0
  end
end

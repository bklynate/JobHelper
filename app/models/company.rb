class Company < ActiveRecord::Base
  LINKS = [
    :website,
    :jobs_site
  ]

  has_many :applications, dependent: :destroy
  validates :name, presence: true, uniqueness: true

  before_save :add_http

  def self.links
    LINKS
  end

  def add_http

    Company.links.each do |link|
      next unless self.send(link)
      unless self.send(link)[0..6] == "http://" || self.send(link)[0..7] == "https://"
        self.send(link.to_s + "=", "http://"+  self.send(link))
      end
    end
  end


end
